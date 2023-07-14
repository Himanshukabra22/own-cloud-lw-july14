import { Box } from '@mui/material';
import React from 'react'
import ButtonNormal from './ButtonNormal';
import ButtonWithSingleInput from './ButtonWithSingleInput';
import ButtonWithTwoInput from './ButtonWithTwoInput';

const DockerGUIHeader = () => {
    return (
        <Box
            sx={{
                p: 3, display: 'grid', gridRowGap: 15,
                gridAutoFlow: 'column dense', overflow: 'auto',
                gridTemplateRows: 'repeat(3, 45px [row-start])',
                gridTemplateColumns: 'repeat(5, 250px [col-start])',
                backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#121212' : '#f1f1f1'
            }}
        >
            <ButtonNormal text="List all containers" cmd="sudo docker ps -a" />
            <ButtonNormal text="List running containers" cmd="sudo docker ps" />
            <ButtonNormal text="List stopped containers" cmd="echo ... " />
            <ButtonNormal text="List images" cmd="sudo docker images" />
            <ButtonNormal text="List networks" cmd="sudo docker network ls" />
            
            <ButtonWithSingleInput text="Show container log" label="Container id/name" cmd="sudo docker logs " />
            <ButtonWithSingleInput text="Pull docker image" label="Image name" cmd="sudo docker pull " />
            <ButtonWithSingleInput text="Remove image" label="Image name" cmd="sudo docker rmi " />
            <ButtonWithSingleInput text="Search image on hub" label="Keywords" cmd="sudo docker search " />
            <ButtonWithSingleInput text="Show image history" label="Image name" cmd="sudo docker history " />
            <ButtonWithSingleInput text="Start container" label="Container id/name" cmd="sudo docker start " />
            <ButtonWithSingleInput text="Stop container" label="Container id/name" cmd="sudo docker stop " />
            
            <ButtonWithTwoInput text="Run container" label1="Container name"  label2="Image name"  />
            <ButtonWithSingleInput text="Remove container" label="Container id/name" cmd="sudo docker rm " />
            <ButtonWithSingleInput text="Inspect container" label="Container id/name" cmd="sudo docker inspect " />
        </Box>
    )
}

export default DockerGUIHeader;