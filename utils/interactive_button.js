const productsButtons = (info, button) => {
  let message = {
    payload: {
      type: "interactive",
      interactive: {
        type: "button",
        header: {
          type: "text",
          text: "Welcome",
        },
        body: {
          text: info,
        },
        footer: {
          text: "To continue click your prefer option.",
        },
        action: {
          buttons: button,
        },
      },
    },
  };
  return message;
};

const listButtons = (question, options) => {
  let lists = {
    payload: {
      type: "interactive",
      interactive: {
        type: "list",
        body: {
          text: question,
        },
        action: {
          button: "Please choose",
          sections: [
            {
              rows: options,
            },
          ],
        },
      },
    },
  };

  return lists;
};

module.exports = {
  productsButtons,
  listButtons,
};
