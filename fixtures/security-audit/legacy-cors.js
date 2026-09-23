// INTENTIONAL NON-EXECUTED SECURITY FIXTURE for APES integration testing.
app.use(cors({
  credentials: true,
  origin(origin, callback) {
    if (allowed(origin)) callback(null, true);
    else { callback(null, true); }
  }
}));
