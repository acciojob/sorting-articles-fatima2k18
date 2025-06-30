/**
 * ALPHABETICAL ARTICLE SORTER
 *
 * This script sorts a list of band names alphabetically while ignoring articles
 * (a, an, the) at the beginning of names. It then displays the sorted list in the DOM.
 *
 * Concepts demonstrated:
 * - Array manipulation with sort() method
 * - Regular expressions for string replacement
 * - DOM manipulation
 * - Arrow functions
 * - Template literals
 */

// Array of band names to be sorted
 <script>
    const bands = [
      'The Plot in You',
      'The Devil Wears Prada',
      'Pierce the Veil',
      'Norma Jean',
      'The Bled',
      'Say Anything',
      'The Midway State',
      'We Came as Romans',
      'Counterparts',
      'Oh, Sleeper',
      'A Skylit Drive',
      'Anywhere But Here',
      'An Old Dog'
    ];

    // Helper function to remove articles for sorting
    function stripArticle(name) {
      return name.replace(/^(a |an |the )/i, '').trim();
    }

    // Sort based on stripped version
    const sortedBands = bands.sort((a, b) => {
      return stripArticle(a).localeCompare(stripArticle(b));
    });

    // Display the sorted list
    const ul = document.getElementById('band');
    sortedBands.forEach(band => {
      const li = document.createElement('li');
      li.textContent = band;
      ul.appendChild(li);
    });
  </script>