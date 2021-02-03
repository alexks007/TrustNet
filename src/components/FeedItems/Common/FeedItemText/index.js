import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { size } from 'lodash';

const CHAR_LIMIT = 104;

const ContentText = styled(H5)`
  padding: 0 16px 8px 16px;
`;

const ShowMoreLabel = styled(H5).attrs({ type: 'link' })``;

export const FeedItemText = ({ children, ...rest }) => {
  const [text, setText] = useState('');
  const [showingMore, setShowingMore] = useState(false);

  useEffect(() => {
    let value = children;
    const isOverLimit = size(value) > CHAR_LIMIT;
    if (isOverLimit && !showingMore && value) {
      value = `${value.substring(0, CHAR_LIMIT)}...`;
    }
    setText(value);
  }, [children, showingMore]);

  function onToggle() {
    setShowingMore((value) => !value);
  }

  return (
    <ContentText {...rest} onPress={onToggle}>
      {text}{' '}
      {size(children) > CHAR_LIMIT && (
        <ShowMoreLabel>{showingMore ? 'Hide' : 'Show more...'}</ShowMoreLabel>
      )}
    </ContentText>
  );
};
