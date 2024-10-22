function getAcceleration(a) {
    
    if (a.f !== undefined && a.m !== undefined && a.m !== 0 ) {
      return a.f / a.m;
    }
    if (a.Δv !== undefined && a.Δt !== undefined && a.Δt !== 0) {
      return a.Δv / a.Δt;
    }
    if (a.d !== undefined && a.t !== undefined && a.t !== 0)  {
      return (2 * a.d) / (a.t * a.t);
    }
        return "impossible";
  }