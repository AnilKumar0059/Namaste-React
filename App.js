// const heading = React.createElement("h1", {id:"heading"}, "KPi Tech Servies Pvt Ltd");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Kpi Tech"),
    React.createElement("h2", {}, "Kpi Tech"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Kpi Tech"),
    React.createElement("h2", {}, "Kpi Tech"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
