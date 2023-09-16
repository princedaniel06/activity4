
        let users = [];
        let editingIndex = -1; 

        function addUser() {
            const nameInput = document.getElementById("name");
            const mobileInput = document.getElementById("mobile");

            const name = nameInput.value.trim();
            const mobile = mobileInput.value.trim();

            if (name === "" || mobile === "") {
                alert("Please enter both name and mobile number.");
                return;
            }

            if (editingIndex === -1) {
                users.push({ name, mobile });
            } else {
                
                users[editingIndex] = { name, mobile };
                editingIndex = -1;
            }

            renderUserList();
            nameInput.value = "";
            mobileInput.value = "";
        }

        function editUser(index) {
            const user = users[index];
            const nameInput = document.getElementById("name");
            const mobileInput = document.getElementById("mobile");

            nameInput.value = user.name;
            mobileInput.value = user.mobile;
            editingIndex = index; 
        }

        function deleteUser(index) {
            users.splice(index, 1);
            renderUserList();
        }

        function renderUserList() {
            const userList = document.getElementById("userList");
            userList.innerHTML = "";

            users.forEach((user, index) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.mobile}</td>
                    <td> 
                        <button style="background:blue; color: white;" onclick="editUser(${index})">Edit</button>
                        <button style="background:red; color: white;" onclick="deleteUser(${index})">Delete</button>
                    </td>
                `;
                userList.appendChild(row);
            });
        }

        renderUserList();
  