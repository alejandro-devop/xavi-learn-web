import Lowlight from "react-lowlight";
import js from "highlight.js/lib/languages/javascript";
import bash from "highlight.js/lib/languages/bash";
import json from "highlight.js/lib/languages/json";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import sql from "highlight.js/lib/languages/sql";
import typescript from "highlight.js/lib/languages/typescript";
import php from "highlight.js/lib/languages/php";
import "highlight.js/styles/github.css";

Lowlight.registerLanguage("js", js);
Lowlight.registerLanguage("bash", bash);
Lowlight.registerLanguage("json", json);
Lowlight.registerLanguage("xml", xml);
Lowlight.registerLanguage("css", css);
Lowlight.registerLanguage("sql", sql);
Lowlight.registerLanguage("typescript", typescript);
Lowlight.registerLanguage("php", php);

const renderer: any = {
  code(snippet: any, lang: any) {
    return <Lowlight language={lang} value={snippet} inline={true} />;
  },
};

export default renderer;
