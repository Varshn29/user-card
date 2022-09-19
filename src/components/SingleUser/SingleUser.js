import { Grid } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleUser } from '../../redux/action/singleUserAction';
import SingleUserDetails from './SingleUserDetails';

const SingleUser = () => {

  const dispatch = useDispatch();
  const { isLoading, singleUserData, error } = useSelector(state => state.singleUser);
  const { results } = singleUserData;

  useEffect(() => {
    dispatch(fetchSingleUser())
  }, [])

  const showDetails = (data) => {
    return data.map((item, i) => {
      console.log(item)
      return <SingleUserDetails {...item} key={i} />
    })
  }

  return (
    <div>
      {results?.length > 0 && showDetails(results)}
    </div>
  )
}

export default SingleUser