package org.hitachivantara.echo.impl;

import org.hitachivantara.echo.IEchoService;

public class EchoService implements IEchoService {

  @Override public String echo( String message, int repeatTimes ) {
    if ( repeatTimes < 1 ) {
      return "";
    }

    StringBuilder stringBuilder = new StringBuilder();
    // Build repetitions
    for ( int iRepetition = 1; iRepetition < repeatTimes; iRepetition++ ) {
      stringBuilder.append( message );
      stringBuilder.append( "... " );
    }
    // Last entry
    stringBuilder.append( message );

    return stringBuilder.toString();
  }
}
