function createInstallments(data)
{
  let invoiceItems = data.charges.map(ch => ({
    amount: parseFloat(ch.amount),
    chargeId: ch.chargeId
  }));

  let issueTimestamp = data.coverageStartTimestamp
  if (data.transactionType === 'cancellation') {
    issueTimestamp = (new Date()).getTime() // issue now
  }

  return {
    installments: [{
    dueTimestamp: data.coverageStartTimestamp,
    issueTimestamp,
    startTimestamp: data.coverageStartTimestamp,
    endTimestamp: data.coverageEndTimestamp,
    invoiceItems: invoiceItems,
    writeOff: false
  }]};
}

exports.createInstallments = createInstallments;
