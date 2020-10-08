import express from "express";
import { renderToString } from 'react-dom/server';
import Index from '../components/pages/index';
import Login from '../components/pages/login';
import Settings from '../components/pages/settings';
import Register from '../components/pages/register';
import React from 'react';

const router = express.Router();

router.get('/', async (req, res) => {
  let reactComp = renderToString(React.createElement(Index));
  res.status(200).render('./pages/index', { reactApp: reactComp });
});

router.get('/login', async (req, res) => {
  let reactComp = renderToString(React.createElement(Login));
  res.status(200).render('./pages/login', { reactApp: reactComp });
});

router.get('/settings', async (_req, res) => {
  let reactComp = renderToString(React.createElement(Settings));
  res.status(200).render('./pages/settings', { reactApp: reactComp });
});

router.get('/register', async (req, res) => {
  let reactComp = renderToString(React.createElement(Register));
  res.status(200).render('./pages/register', { reactApp: reactComp });
});

export default router;
