import apps from "./src/apps.js";
const port = process.env.PORT || 3000;

apps.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
