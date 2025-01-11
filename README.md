# Unhandled Promise Rejection in ERC20 Approval

This repository demonstrates a common error in Dapps: failing to handle promise rejections when interacting with smart contracts.  Specifically, the `approveERC20` function doesn't handle the case where the `approve` transaction might revert.

## Bug

The `bug.js` file contains the flawed code.  The `approveERC20` function directly returns the promise from the `send` method.  If the `approve` transaction fails (e.g., due to insufficient allowance), the promise will reject, and the error will likely be silently ignored, leading to unexpected behavior in the Dapp.

## Solution

The `bugSolution.js` file shows the corrected code. The solution uses `.then` and `.catch` to handle both success and failure cases. It provides informative feedback to the user based on the outcome of the transaction.