/**
 * Checks if the current month is Pride Month (June).
 * @returns {boolean} - Returns true if the current month is June, otherwise false.
 */
export const isPrideMonth = () => {
  const currentMonth = new Date().getMonth() + 1;
  return currentMonth === 6;
};

/**
 * Checks if the current date is Christmas (December 24).
 * @returns {boolean} - Returns true if the current date is December 24, otherwise false.
 */
export const isChristmas = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  return currentMonth === 12 && currentDay === 24;
};

/**
 * Checks if the current date is New Year's Day (January 1).
 * @returns {boolean} - Returns true if the current date is January 1, otherwise false.
 */
export const isNewYear = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  return currentMonth === 1 && currentDay === 1;
};

/**
 * Checks if the current date is Valentine's Day (February 14).
 * @returns {boolean} - Returns true if the current date is February 14, otherwise false.
 */
export const isValentinesDay = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  return currentMonth === 2 && currentDay === 14;
};

/**
 * Checks if the current date is Easter Sunday (April 9, 2024).
 * @returns {boolean} - Returns true if the current date is April 9, 2024, otherwise false.
 */
export const isEaster = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  if (currentYear === 2024) {
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    return currentMonth === 4 && currentDay === 9;
  }
  return false;
};

/**
 * Checks if the current date is Halloween (October 31).
 * @returns {boolean} - Returns true if the current date is October 31, otherwise false.
 */
export const isHalloween = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  return currentMonth === 10 && currentDay === 31;
};

/**
 * Checks if the current date is Black Friday (the day after Thanksgiving).
 * @returns {boolean} - Returns true if the current date is Black Friday, otherwise false.
 */
export const isBlackFriday = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  const currentDayOfWeek = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)

  if (currentMonth === 11 && currentDayOfWeek === 5) {
    const fourthThursday = new Date(
      currentDate.getFullYear(),
      10,
      22 + ((11 - new Date(currentDate.getFullYear(), 10, 1).getDay()) % 7),
    );
    return currentDay === fourthThursday.getDate() + 1;
  }

  return false;
};
