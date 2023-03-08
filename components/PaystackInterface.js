export const handlePayment = (email, amount) => {


  const handler = PaystackPop.setup({
    key: 'pk_test_41122ad302f4c1eae371a289e6b4695d29ba5b39', 
    email,
    amount: amount * 100,
    onClose: () => {
      alert('Window closed.');
    },
    callback: (response) => {
      const message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });

  handler.openIframe();
}