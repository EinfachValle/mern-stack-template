const MuiDividerOverride = {
  root: ({ theme }) => ({
    borderColor: theme.palette.border.seperator,

    // For a vertical divider:
    "&.MuiDivider-vertical": {
      borderColor: theme.palette.border.seperator,
    },
  }),
};

export default MuiDividerOverride;
