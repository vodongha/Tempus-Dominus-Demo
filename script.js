/**
 * Initializes the Tempus Dominus datetime picker when the DOM is fully loaded.
 *
 * This script sets up a datetime picker on an input field with ID "datetimepicker"
 * and allows it to be opened by either clicking on the input field or a related icon.
 */
document.addEventListener("DOMContentLoaded", function () {
  const inputElement = document.getElementById("datetimepicker");

  /**
   * Initializes the Tempus Dominus datetime picker.
   * @type {tempusDominus.TempusDominus}
   */
  const tempus = new tempusDominus.TempusDominus(inputElement, {
    localization: {
      format: 'yyyy-MM-dd HH:mm', // Date/Time Format
      locale: 'en',               // Language (eg: 'en', 'de', 'fr'...)
      startOfTheWeek: 1,          // Start day of the week (0 = Sunday, 1 = Monday)
      hourCycle: 'h12',           // 24h ('h23') or 12h ('h12')
    },
    defaultDate: new Date(),      // Default date
    display: {
      theme: "dark",             // Can be "auto", "light", or "dark"
      components: {
        clock: true               // Show/Hide clock
      }
    }
  });

  /**
   * Shows the datetime picker when the input field is clicked.
   */
  inputElement.addEventListener('click', function () {
    tempus.show();
  });
});
