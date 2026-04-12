  function switchPage(id) {
            const name = document.getElementById('ras');
            const value = name.value;
            if (value !== "") {
                name.selectedIndex = 0;
                window.location.href = value;

            }
        }