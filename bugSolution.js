async function getBalance() {
  const contract = getContract(); 
  const balance = await contract.methods.balanceOf(account).call();
  return balance;
}

async function approveERC20(amount) {
  const tokenContract = getTokenContract(); 
  try {
    const result = await tokenContract.methods.approve(spenderAddress, amount).send({ from: account });
    console.log('Approval successful:', result);
    return result; // Return the transaction receipt
  } catch (error) {
    console.error('Approval failed:', error);
    // Provide informative feedback to the user
    // For example, display an error message or retry mechanism
    //  alert("Transaction failed: " + error.message);
    return null; // Or throw the error to be handled higher up
  }
}

// ... rest of the Dapp code ... 