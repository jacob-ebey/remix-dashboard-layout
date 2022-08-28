declare module "svgstore" {
	function svgstore(): {
		add(name: string, svgAsString: string): void;
	} & NodeJS.ArrayBufferView;

	export default svgstore;
}
