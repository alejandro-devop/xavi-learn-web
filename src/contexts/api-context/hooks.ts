import {
  ApiConfigType,
  DoRequestConfig,
  EndpointPathType,
  HookReturnType,
  HookReturnWithPayloadType,
} from "./types";
import { ApiCtx } from "./ApiContext";
import { useCallback, useContext, useEffect, useRef, useState } from "react";

/**
 * Hook to access the API client context
 * @returns
 */
const useApiCtx = () => {
  return useContext(ApiCtx);
};

/**
 * Hook to execute api request using the api client
 * @param endpoint
 * @param config
 * @returns
 */
export const useRequest = <PayloadType = {}, ResponseType = {}>(
  endpoint: EndpointPathType,
  config?: ApiConfigType<DoRequestConfig>
): [any, any, any?] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[] | undefined>();
  const { client } = useApiCtx();
  const executed = useRef<boolean>(false);
  /**
   * Function to send the request to the server, it just uses the
   * doRequest method from the Client class
   * @param p
   * @returns
   */
  const sendRequest = async (
    p: PayloadType
  ): Promise<APIResponseType<ResponseType>> => {
    setLoading(true);
    executed.current = true;
    try {
      /**
       * The errors are stored in a different state so they can be returned
       * as a part of the response, also the backed is programmed to
       * always return an errors variable with the compilation of errors.
       */
      setErrors(undefined);
      const { response } = await client.doRequest(endpoint, {
        ...config,
        payload: p,
      });
      const { errors } = response;
      if (!response.status && errors) {
        setErrors(errors);
      }
      setLoading(false);
      return response as APIResponseType<ResponseType>;
    } catch (err) {
      console.error(err);
      setLoading(false);
      return {} as APIResponseType<ResponseType>;
    }
  };

  return [sendRequest, loading, { errors, executed: executed.current }];
};

/**
 * Hook which works as a facade for the useRequest hook, it can
 * be used to prepare a get request which can be triggered by user
 * actions or programmaticaly
 * @param endpoint
 * @returns
 */
export const useGetLazy = (
  endpoint: EndpointPathType,
  config?: ApiConfigType
) => {
  const [sendRequest, loading, { executed }] = useRequest(endpoint, {
    ...config,
    method: "GET",
  });
  return [sendRequest, loading, { executed }];
};

/**
 * Function which executes a get request as soon as the component is loaded.
 * @param endpoint
 * @returns
 */
export const useGet = <ResponseType>(
  endpoint: EndpointPathType
): [ResponseType, boolean, { refetch: any }] => {
  const [sendRequest, loading, { executed }] = useGetLazy(endpoint);
  const [dataFetched, setDataFetched] = useState<ResponseType>();
  const getData = useCallback(async () => {
    const { data } = await sendRequest();
    setDataFetched(data);
  }, [sendRequest]);

  useEffect(() => {
    if (!executed) {
      getData();
    }
  }, [executed, getData]);

  return [dataFetched as ResponseType, loading, { refetch: getData }];
};

/**
 * Facade for the useRequest hook, it overrides the method to be a post
 * @param endpoint
 * @param config
 * @returns
 */
export const usePost = <PayloadType = {}, ResponseType = {}>(
  endpoint: EndpointPathType,
  config?: ApiConfigType<{}>
): HookReturnWithPayloadType<PayloadType, ResponseType> => {
  const [sendRequest, loading, { errors }] = useRequest<
    PayloadType,
    ResponseType
  >(endpoint, {
    ...config,
    method: "POST",
  });
  return [sendRequest, loading, { errors }];
};

/**
 * Facade for the useRequest, it prepares a put request
 * @param endpoint
 * @param config
 * @returns
 */
export const usePut = <PayloadType = {}, ResponseType = {}>(
  endpoint: EndpointPathType,
  config?: ApiConfigType<{}>
): HookReturnWithPayloadType<PayloadType, ResponseType> => {
  const [sendRequest, loading, { errors }] = useRequest<
    PayloadType,
    ResponseType
  >(endpoint, {
    ...config,
    method: "PUT",
  });
  return [sendRequest, loading, { errors }];
};

/**
 * Facade for the useRequest, it prepares a delete request
 * @param endpoint
 * @param config
 * @returns
 */
export const useDelete = <ResponseType = {}>(
  endpoint: EndpointPathType,
  config?: ApiConfigType<{}>
): HookReturnType<ResponseType> => {
  const [sendRequest, loading] = useRequest(endpoint, {
    ...config,
    method: "DELETE",
  });
  return [sendRequest, loading];
};

/**
 * Facade for useRequest hook, it prepares a patch request
 * @param endpoint
 * @param config
 * @returns
 */
export const usePatch = <PayloadType = {}, ResponseType = {}>(
  endpoint: EndpointPathType,
  config?: ApiConfigType<{}>
): HookReturnWithPayloadType<PayloadType, ResponseType> => {
  const [sendRequest, loading, { errors }] = useRequest<
    PayloadType,
    ResponseType
  >(endpoint, {
    ...config,
    method: "PATCH",
  });
  return [sendRequest, loading, { errors }];
};
