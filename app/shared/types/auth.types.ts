import { NextPage } from 'next'

export type TypeRoles = {
	isOnlyAdmin?: boolean
	isOnlyUser?: boolean
}

export type TypeComponentAuthFields = { Component: TypeRoles }
