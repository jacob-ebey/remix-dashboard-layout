import * as fs from "fs";
import * as path from "path";
import svgstore from "svgstore";

const SPRITES_DIR = "icons";

const sprites = svgstore();

fs.readdirSync(SPRITES_DIR).forEach((file) => {
	if (file.endsWith(".svg")) {
		sprites.add(
			file.replace(/\.svg$/, ""),
			fs.readFileSync(path.join(SPRITES_DIR, file), "utf8")
		);
	}
});

fs.writeFileSync(`app/${SPRITES_DIR}.svg`, sprites);
