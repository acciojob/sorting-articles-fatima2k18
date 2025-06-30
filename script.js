//your JS code here. If required.
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

        function getSortKey(title) {
            // Remove leading articles (a, an, the) for sorting purposes
            const normalized = title.toLowerCase();
            if (normalized.startsWith('the ')) {
                return title.substring(4);
            } else if (normalized.startsWith('an ')) {
                return title.substring(3);
            } else if (normalized.startsWith('a ')) {
                return title.substring(2);
            }
            return title;
        }

        function sortBands(bandList) {
            return bandList.sort((a, b) => {
                const sortKeyA = getSortKey(a).toLowerCase();
                const sortKeyB = getSortKey(b).toLowerCase();
                return sortKeyA.localeCompare(sortKeyB);
            });
        }

        function displayBands() {
            const bandList = document.getElementById('band');
            const sortedBands = sortBands([...bands]); // Create a copy to avoid mutating original
            
            sortedBands.forEach(band => {
                const li = document.createElement('li');
                li.textContent = band;
                bandList.appendChild(li);
            });
        }

        // Initialize the page
        displayBands();