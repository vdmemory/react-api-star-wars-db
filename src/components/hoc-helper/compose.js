export default function compose(...functions) {
  return component =>
    functions.reduceRight((prevResult, f) => f(prevResult), component);
}
