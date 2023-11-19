// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// add new card into the "backlog" column
board.addCard({
    id: 1,
    columnId: "backlog",
    card: { label: "New card" }
});