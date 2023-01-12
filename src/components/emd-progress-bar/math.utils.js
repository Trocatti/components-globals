import { toFixed, toInteger, toFloat } from "./number.utils";

/**
 * @description Converts the value into a fixed float
 * @param valueToConvert the value to be converted into a fixed float
 */
function getValue(valueToConvert, precisionValue) {
  return toFixed(toFloat(valueToConvert, 0), precisionValue);
}

/**
 * @description Validates the max value and defaults to 100 for invalid values 0, nan, -number
 * @param valuetoconvert the value to be converted into a fixed float
 */
function getMax(valueToConvert) {
  const _max = toFloat(valueToConvert);
  return _max > 0 ? _max : 100;
}

/**
 * @description Defaults to 0 for invalid values -number, NaN
 * @param precisionValue the value for the precision @default 0
 */
function getPrecision(precisionValue = 0) {
  return Math.max(toInteger(precisionValue, 0), 0);
}

/**
 * @description Calculates the progress value, max value and precision value into the correct processed value
 * @param progressValue the value for the progress
 * @param maxValue the max value of the progress bat
 * @param precisionValue the precision value @default 0
 */
function getProgress(progressValue, maxValue, precisionValue) {
  const _precision = getPrecision(precisionValue);
  const pow = Math.pow(10, _precision);
  return toFixed(
    (100 * pow * getValue(progressValue)) / getMax(maxValue) / pow,
    _precision
  );
}

export { getValue, getMax, getPrecision, getProgress };
