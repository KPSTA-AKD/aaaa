function goToIndex() {
        window.location.href = "index.html";
      }

function populateTable() {
      var table = document.getElementById("stageTable");
          // Add rows dynamically based on your data
          // Example:
          // var row = table.insertRow();
          // var cell1 = row.insertCell(0);
          // var cell2 = row.insertCell(1);
          // cell1.innerHTML = "STAGE-1";
          // cell2.innerHTML = "<a href='image/stage/4s1.jpg' class='btn btn-primary'><i class='fas fa-eye'></i></a>";
   }

      // Call the function to populate the table
populateTable();

      // Search function to filter table rows
function searchTable() {
          var input, filter, table, tr, td, i, txtValue;
          input = document.getElementById("searchInput");
          filter = input.value.toUpperCase();
          table = document.getElementById("stageTable");
          tr = table.getElementsByTagName("tr");

          for (i = 0; i < tr.length; i++) {
              td = tr[i].getElementsByTagName("td")[0]; // Assuming the stage number is in the first column
              if (td) {
                  txtValue = td.textContent || td.innerText;
                  if (txtValue.toUpperCase().indexOf(filter) > -1) {
                      tr[i].style.display = "";
                  } else {
                      tr[i].style.display = "none";
                  }
              }
          }
      }

      function searchTable2() {
          var input, filter, table, tr, td, i, txtValue;
          input = document.getElementById("searchInput");
          filter = input.value.toUpperCase();
          table = document.getElementById("stageTable");
          tr = table.getElementsByTagName("tr");

          for (i = 0; i < tr.length; i++) {
              // Assuming the stage number is in the first column (index 0)
              tdNumber = tr[i].getElementsByTagName("td")[0];
              // Assuming the stage name is in the second column (index 1)
              tdName = tr[i].getElementsByTagName("td")[1];

              if (tdNumber || tdName) {
                  txtValueNumber = tdNumber.textContent || tdNumber.innerText;
                  txtValueName = tdName.textContent || tdName.innerText;

                  if (txtValueNumber.toUpperCase().indexOf(filter) > -1 || txtValueName.toUpperCase().indexOf(filter) > -1) {
                      tr[i].style.display = "";
                  } else {
                      tr[i].style.display = "none";
                  }
              }
          }
      }
