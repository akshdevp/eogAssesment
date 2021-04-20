import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useQuery } from 'urql';
import { actions, measurementSelector, selectedMetricsSelector } from './reducer';
import { formatter, getColor, labelFormatter } from './util';

const multipleMeasurementsQuery = `
query($metrics: [MeasurementQuery]!) {
  heartBeat,
  getMultipleMeasurements(input: $metrics) {
    metric
    measurements {
      metric
      value
      at
    }
  }
}
`;

const Graph = () => {
  const dispatch = useDispatch();

  const measurementsData = useSelector(measurementSelector);
  const selectedMetrics = useSelector(selectedMetricsSelector);

  const [result] = useQuery({
    requestPolicy: 'cache-and-network',
    pollInterval: 1300,
    query: multipleMeasurementsQuery,
    variables: {
      metrics: selectedMetrics,
    },
    pause: selectedMetrics.length === 0 && measurementsData.length === 0,
  });

  const { data, error } = result;

  useEffect(() => {
    if (error) {
      dispatch(actions.measurementApiErrorReceived({ error: error.message }));
      return;
    }

    if (!data) return;

    dispatch(actions.setHeartBeat(data.heartBeat));
    dispatch(actions.measurementDataRecevied(data.getMultipleMeasurements));
  }, [dispatch, data, error]);

  return (
    
    <div>
      <p>graph goes here</p>
    </div>
  );
};

export default Graph;
