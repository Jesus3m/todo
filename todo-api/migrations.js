const path = require("path");
const fs = require("fs");

const sequelizeRc = fs.readFileSync(path.join(__dirname, ".sequelizerc"), {
  encoding: "utf-8",
});

const changeMigrationsPath = (template) => {
  const from = process.env.NODE_ENV === "production" ? "src" : "dist";
  const to = process.env.NODE_ENV !== "production" ? "src" : "dist";
  return template.replace(new RegExp(from, "g"), function (_unused, varName) {
    return to;
  });
};

const devOrProd = changeMigrationsPath(sequelizeRc);
fs.writeFileSync(path.join(__dirname, ".sequelizerc"), devOrProd, {
  encoding: "utf-8",
});
