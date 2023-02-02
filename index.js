const Notification = (props) => {
  const { information, success, warning, error } = props;
  return (
    <div class="bg-container">
      <h1>Notifications</h1>
      <div class="messagecontainer">
        <div class="card1">
          <img src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" />
          <p>{information}</p>
        </div>
        <div class="card2">
          <img src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" />
          <p>{success}</p>
        </div>
        <div class="card3">
          <img src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" />
          <p>{warning}</p>
        </div>
        <div class="card4">
          <img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
};

const element = (
  <Notification
    information="Information Message"
    success="Success Message"
    warning="Warning Message"
    error="Error Message"
  />
);
ReactDOM.render(element, document.getElementById("root"));
