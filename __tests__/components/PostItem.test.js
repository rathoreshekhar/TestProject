import { render } from '@testing-library/react-native';
import React from 'react';
import PostItem from '../../components/PostItem';

describe('PostItem', () => {
  const mockItem = {
    id: 1,
    content: 'Test Post',
    image: 'test.jpg',
    create_at: 'Now',
    reactions: {like: 10, love: 5},
  };

  it('renders the post content', () => {
    const {getByText} = render(<PostItem item={mockItem} />);
    const titleElement = getByText(mockItem.content);
    expect(titleElement).toBeTruthy();
  });

  it('renders the post image', () => {
    const {getByTestId} = render(<PostItem item={mockItem} />);
    const imageElement = getByTestId('post-image');
    expect(imageElement.props.source.uri).toBe(mockItem.image);
  });

  it('renders the post likes count', () => {
    const {getByText} = render(<PostItem item={mockItem} />);
    const likesElement = getByText(`${mockItem.reactions.like}`);
    expect(likesElement).toBeTruthy();
  });
});
