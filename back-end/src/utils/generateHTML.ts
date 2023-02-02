import { IClientWithContacts } from "../interfaces/clients/clients";

const generateHTML = (clients: IClientWithContacts[]) => {
  let html =
    "<html><head><style> th { padding: 10px; border: 1px solid black; } p { margin: 10px 0; } </style></head><body><table><tr><th>Cliente</th><th>Contatos</th></tr>";

  clients.forEach((client: any) => {
    html += `<tr><td style="margin: 10px;">${client.client.name}</td><td>`;
    client.contacts.forEach((contact: any) => {
      html += `<p>Nome: ${contact.name}</p>
                 <p>Email: ${contact.email}</p>
                 <p>Telefone: ${contact.telephone}</p>`;
    });
    html += "</td></tr>";
  });
  html += "</table></body></html>";
  return html;
};

export default generateHTML;
