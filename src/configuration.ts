import * as vscode from 'vscode';
import { Rule } from './rule';

export class Configuration {
    fieldsOnly: boolean;
    rules: Rule[];

    constructor(fieldsOnly: boolean, rules: Rule[]) {
        this.fieldsOnly = fieldsOnly;
        this.rules = rules;
    }
}

export function getConfiguration(): Configuration {
    const config = vscode.workspace.getConfiguration().get<Configuration>('linkme');
    if (!config) {
        throw new Error('No configuration found. Probably an error in vscode');
    }
    return config;
}