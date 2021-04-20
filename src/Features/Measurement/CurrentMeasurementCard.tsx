import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { CardProps } from './types';

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'inline-block',
    margin: '10px',
    ['@media (max-width:780px)']: {
      width: '40%',
      fontSize: 24
    },
  },
  title: {
    fontSize: 14,
  },
  textValue: {
    fontSize: 32,
    textAlign: 'center',
    ['@media (max-width:780px)']: {
      fontSize: 24
    },
  }
});

const CurrentMeasurementCard = ({ measurement }: CardProps) => {
  const classes = useStyles();

  return (
    <div> card displays here</div>
  );
};

export default CurrentMeasurementCard;
