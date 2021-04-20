import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'urql';
import { actions, availableMetricsSelector } from './../Features/Measurement/reducer';

const getMetricsQuery = `query { getMetrics }`;

export default function SelectMetric() {
 

  return (
    <div>
      menu bar goes here
    </div>
  );
}
