import { config } from "@/helpers/config";
import React from "react";
import { Container } from "react-bootstrap";
import React from 'react'
import { config } from '@/helpers/config'
import { Container } from 'react-bootstrap'

export const Topbar = () => {
	return (
		<div className="topbar bg-warning">
			<Container>
				<div className="slogan">
					<i className="pi pi-megaphone"></i>
					{config.project.slogan}
				</div>

                Login
			</Container>
		</div>
	);
};
