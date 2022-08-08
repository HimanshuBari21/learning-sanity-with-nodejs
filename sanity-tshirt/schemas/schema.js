import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import TShirt from './TShirts' // import the file you just made
import nav from './HeadSection' // import the file you just made
import nav2 from './HeadSection2' // import the file you just made

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
		TShirt, nav, nav2
  ]),
});