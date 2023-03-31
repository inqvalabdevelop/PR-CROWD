import React from 'react';
import { useState, useEffect } from 'react'
import avatar from "../../images/profile.webp"
import { Card, CardGroup, Row, Col } from 'react-bootstrap'
import { useFunding } from '../../context/fundingContext';

function Comment(props) {
    const { getComments } = useFunding();
    const [post, setPost] = useState();

    useEffect(() => {
        (async () => {
            if (props.idFunding != "") {
                const post = await getComments(props.idFunding);
                setPost(post);
            }
        })();
    }, [props.idFunding, getComments]);


    return (
        <CardGroup>
            <Row xs={1} md={1} className="g-4 rounded">
                {post?.map(postC => (
                    <Col>
                        <Card key={post.IdComment}>
                            <Card.Body>
                                <Row>
                                    <div className='col-2'><img src={avatar} class="profile-image img-circle" height="40" width="40" /></div>
                                    <div className='col mt-2'> <b class="">{postC.Name}</b></div>
                                </Row>
                                <Card.Text className="p-2">
                                    <div className="flex justify-left ">
                                        <p className="text-muted">
                                            {postC.Comment}
                                        </p>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </CardGroup>
    );
}

export default Comment;