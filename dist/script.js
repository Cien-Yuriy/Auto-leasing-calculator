class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = { coast: 3300000, percent: 13, term: 60 };
    this.handleChangeC = this.handleChangeC.bind(this);
    this.handleChangeF = this.handleChangeF.bind(this);
    this.handleChangeT = this.handleChangeT.bind(this);
  }
  handleChangeC(event) {
    this.setState({ coast: event.target.value });
  }
  handleChangeF(event) {
    this.setState({ percent: event.target.value });
  }
  handleChangeT(event) {
    this.setState({ term: event.target.value });
  }
  render() {
    const firstPay = this.state.coast * this.state.percent / 100;
    const monthPay = Math.round((this.state.coast - this.state.coast * this.state.percent / 100) * (0.035 * Math.pow(1 + 0.035, this.state.term) / (Math.pow(1 + 0.035, this.state.term) - 1)));
    const totalSum = Math.round(this.state.coast * this.state.percent / 100 + this.state.term * monthPay);


    return /*#__PURE__*/(
      React.createElement("div", { id: "calc" }, /*#__PURE__*/
      React.createElement("h1", null, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F \u0432 \u043B\u0438\u0437\u0438\u043D\u0433"), /*#__PURE__*/
      React.createElement("form", { method: "post", action: "https://hookb.in/eK160jgYJ6UlaRPldJ1P", enctype: "application/json" }, /*#__PURE__*/
      React.createElement("div", { id: "coast" }, /*#__PURE__*/
      React.createElement("p", null, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F"), /*#__PURE__*/

      React.createElement("input", { id: "field", type: "number", name: "car_coast", step: "50000", value: this.state.coast, onChange: this.handleChangeC, min: "1000000", max: "6000000" }), /*#__PURE__*/React.createElement("div", { id: "unitcoast" }, "\u20BD"), /*#__PURE__*/

      React.createElement("div", { className: "slider" }, /*#__PURE__*/
      React.createElement("input", {
        max: "6000000",
        min: "1000000",
        onChange: this.handleChangeC,
        step: "50000",
        type: "range",
        value: this.state.coast }))), /*#__PURE__*/



      React.createElement("div", { id: "coast" }, /*#__PURE__*/
      React.createElement("p", null, "\u041F\u0435\u0440\u0432\u043E\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u0432\u0437\u043D\u043E\u0441"), /*#__PURE__*/
      React.createElement("div", { id: "fieldip" }, /*#__PURE__*/
      React.createElement("div", { name: "initail_payment", id: "unit", value: firstPay }, firstPay, " ", /*#__PURE__*/React.createElement("div", { id: "unitip" }, "\u20BD")), /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/React.createElement("input", { id: "fieldp", type: "number", name: "initail_payment_percent", value: this.state.percent, onChange: this.handleChangeF, min: "10", max: "60" }), /*#__PURE__*/React.createElement("div", { id: "unitp" }, "%"))), /*#__PURE__*/

      React.createElement("div", { className: "slider" }, /*#__PURE__*/
      React.createElement("input", {
        max: "60",
        min: "10",
        onChange: this.handleChangeF,
        step: "1",
        type: "range",
        value: this.state.percent }))), /*#__PURE__*/



      React.createElement("div", { id: "coast" }, /*#__PURE__*/
      React.createElement("p", null, "\u0421\u0440\u043E\u043A \u043B\u0438\u0437\u0438\u043D\u0433\u0430"), /*#__PURE__*/

      React.createElement("input", { id: "field", type: "number", name: "lease_term", value: this.state.term, onChange: this.handleChangeT, min: "1", max: "60" }), /*#__PURE__*/React.createElement("div", { id: "unitterm" }, "\u043C\u0435\u0441."), /*#__PURE__*/

      React.createElement("div", { className: "slider" }, /*#__PURE__*/
      React.createElement("input", {
        max: "60",
        min: "1",
        onChange: this.handleChangeT,
        step: "1",
        type: "range",
        value: this.state.term }))), /*#__PURE__*/



      React.createElement("div", null, /*#__PURE__*/
      React.createElement("p", null, "\u0421\u0443\u043C\u043C\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u043B\u0438\u0437\u0438\u043D\u0433\u0430"), /*#__PURE__*/
      React.createElement("h2", { name: "total_sum", value: totalSum }, totalSum.toLocaleString(), " ", /*#__PURE__*/React.createElement("div", { id: "unitb" }, "\u20BD"))), /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("p", null, "\u0415\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u044B\u0439 \u043F\u043B\u0430\u0442\u0435\u0436 \u043E\u0442"), /*#__PURE__*/
      React.createElement("h2", { name: "monthly_payment_from", value: monthPay }, monthPay.toLocaleString(), " ", /*#__PURE__*/React.createElement("div", { id: "unitb" }, "\u20BD"))), /*#__PURE__*/

      React.createElement("button", { type: "submit" }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"))));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Calc, null), document.getElementById("app")); //