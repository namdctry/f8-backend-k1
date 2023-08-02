import _ from "lodash";
export function GroupByAge(users) {
  const result = _.groupBy(users, "age");
  console.log(result);
}
