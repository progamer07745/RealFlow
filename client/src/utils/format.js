export const formatBudget=value=>`${new Intl.NumberFormat('en-US').format(value||0)} EGP`;
