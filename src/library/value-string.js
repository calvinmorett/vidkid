const N = require("../web-components/base-node").default;
class ValueString extends N {
	static get inputs() {
		return [
			{
				name: "value",
				observe: true,
				defaultValue: "",
				restrict: String
			}
		];
	}

	static get outputs() {
		return ["value"];
	}

	onAttrChanged(name, oldValue, newValue) {
		this.send("value", newValue);
	}
}

export default {
	label: "Value String",
	text: ValueString.toString()
};
