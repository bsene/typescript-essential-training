async function getContact(contactId) {
  const resp = await $.ajax({
    url: `/contact/${contactId}`,
    datatype: "json",
  });

  return {
    id: +resp.id,
    name: resp.name,
    birthDate: new Date(resp.birthDate),
  };
}

getContact(1).then((contact) => {
  (contact.id = "1234"), (contact.birthDate = "12/12/1990");
});

getContact("2").then((contact) => {
  console.log("Contact: ", JSON.stringify(contact));
});
