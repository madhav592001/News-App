import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { articlesFromSources, getAllSources } from '../redux/newsActions';
import { Spinner, Alert } from 'react-bootstrap';
import './styles.css';
import Source from './Source';

const Sources = () => {
  let dispatch = useDispatch();
  const [selectedSource, setSelectedSource] = React.useState('');

  const { sources, error, loading } = useSelector((state) => state.AllSources);

  //todo -> GET all the sources
  React.useEffect(() => {
    dispatch(getAllSources());
  }, [dispatch]);

  //todo -> GET articles on the basis of source selected
  React.useEffect(() => {
    dispatch(articlesFromSources(selectedSource));
  }, [selectedSource]);

  return (
    <div className='px-2'>
      <h4 className='text-center my-3'>All Sources</h4>

      {error && (
        <div>
          <Alert
            variant='danger'
            className='d-flex align-items-center justify-content-between alert-message'
          >
            {error}{' '}
          </Alert>
        </div>
      )}

      {loading ? (
        <div className='d-flex align-items-center justify-content-center alert-message'>
          <Spinner animation='border' />
        </div>
      ) : (
        <>
          {sources.map((s, idx) => (
            <Source
              source={s}
              key={idx}
              setSelectedSource={setSelectedSource}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Sources;
