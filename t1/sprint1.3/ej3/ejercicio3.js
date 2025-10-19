// ✅ Datos simulados iniciales
let members = [
    {
        user_id: "001",
        username: "ShadowMage",
        level: 50,
        ilvl: 120,
        character_role: "MAGE",
        guild_role: "MEMBER",
        main_archetype: "MAGE",
        secondary_archetype: "CLERIC",
        email: "shadow@example.com",
        notify_email: true
    }
];

// ✅ Referencias al DOM
const addMemberBtn = document.getElementById("addMemberBtn");
const modal = document.getElementById("memberModal");
const closeModal = document.getElementById("closeModal");
const form = document.getElementById("memberForm");
const membersTable = document.querySelector("#membersTable tbody");
const modalTitle = document.getElementById("modalTitle");

// ✅ Renderizar tabla
function renderTable() {
    membersTable.innerHTML = "";
    members.forEach((member, index) => {
        membersTable.innerHTML += `
            <tr>
                <td>${member.user_id}</td>
                <td>${member.username}</td>
                <td>${member.level}</td>
                <td>${member.ilvl}</td>
                <td>${member.character_role}</td>
                <td>${member.guild_role}</td>
                <td>
                    <button onclick="editMember(${index})">Edit</button>
                    <button onclick="deleteMember(${index})">Delete</button>
                </td>
            </tr>`;
    });
}

// ✅ Abrir modal (añadir nuevo miembro)
addMemberBtn.addEventListener("click", () => {
    modal.style.display = "block";
    modalTitle.textContent = "Add New Member";
    form.reset(); // limpiar formulario
    document.getElementById("editingIndex").value = ""; // no estamos editando
});

// ✅ Cerrar modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    form.reset();
});

// ✅ Guardar nuevo miembro (CREATE)
form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Comprobar si es edición o creación
    const editingIndex = document.getElementById("editingIndex").value;

    // Obtener valores del formulario
    const newMember = {
        user_id: document.getElementById("user_id").value,
        username: document.getElementById("username").value,
        level: parseInt(document.getElementById("level").value),
        ilvl: parseInt(document.getElementById("ilvl").value),
        character_role: document.getElementById("character_role").value,
        guild_role: document.getElementById("guild_role").value,
        main_archetype: document.getElementById("main_archetype").value,
        secondary_archetype: document.getElementById("secondary_archetype").value,
        email: document.getElementById("email").value,
        notify_email: document.getElementById("notify_email").checked
    };

    // ✅ Validación: user_id único
    const idDuplicado = members.some(member => member.user_id === newMember.user_id);
    if (editingIndex === "" && idDuplicado) {
        alert("Error: El user_id ya existe. Debe ser único.");
        return;
    }

    // ✅ Si estamos agregando uno nuevo
    if (editingIndex === "") {
        members.push(newMember);
    }

    renderTable();
    modal.style.display = "none";
    form.reset();
});

// ✅ Mostrar tabla por primera vez
renderTable();

// Cerrar modal si se hace clic fuera
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        form.reset();
    }
};
