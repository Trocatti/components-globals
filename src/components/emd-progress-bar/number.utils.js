/**
 * @description
    Converts a value (string, number, etc.) to a string
    representation with `precision` digits after the decimal
    Returns the string 'NaN' if the value cannot be converted
 * @param valueToConvert the value for the progress
 * @param precisionValue the precision value @default 0
 */
function toFixed(valueToConvert, precisionValue = 0) {
  return toFloat(valueToConvert).toFixed(toInteger(precisionValue, 0));
}

/**
 * @description Converts a value (string, number, etc.) to a number
 * @param value the value for the progress
 * @param defaultValue the default value in case the validation fails @default NaN
 */
function toFloat(value, defaultValue = NaN) {
  const float = parseFloat(value);
  return isNaN(float) ? defaultValue : float;
}

/**
 * @description
    Converts a value (string, number, etc.) to an integer number
    Assumes radix base 10
 * @param value the value for the progress
 * @param defaultValue the default value in case the validation fails @default NaN
 */
function toInteger(value, defaultValue = NaN) {
  const integer = parseInt(value, 10);
  return isNaN(integer) ? defaultValue : integer;
}

export { toFixed, toInteger, toFloat };
