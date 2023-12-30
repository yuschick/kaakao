import autoprefixer from "autoprefixer";
import postcssNested from "postcss-nested";

const postcssPlugins = () => [autoprefixer, postcssNested];

export default { postcssPlugins };
