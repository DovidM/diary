import * as React from 'react';
import Container from '../../components/Container';
import TextPostList from '../../components/TextPostList/';

function TextPosts() {

    return (
            <Container
                heading="Text Posts"
                children={<TextPostList />}
            />
            );
}

export default TextPosts;