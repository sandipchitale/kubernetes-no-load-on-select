'use strict';

import * as vscode from 'vscode';
import * as k8s from 'vscode-kubernetes-tools-api';

class KubernetesNoLoadOnSelect {

    // Synchronous so it can return immediately for nodes that aren't of interest
    customize(node: k8s.ClusterExplorerV1.ClusterExplorerNode, treeItem: vscode.TreeItem): void | Thenable<void> {

        // Load configuration
        const config = vscode.workspace.getConfiguration(
            'kubernetes-no-load-on-select'
        );
        let manifestKinds = [];
        if (config && config.get('manifestKinds')) {
            manifestKinds = config.get('manifestKinds');
        }

        let podOnSelect = "Default";
        if (config && config.get('Pod.onselect')) {
            podOnSelect = config.get('Pod.onselect');
        }

        if (node.nodeType === 'resource') {
            if (node.resourceKind.manifestKind === 'Pod' && podOnSelect !== 'Default') {
                if (treeItem.command) {
                    treeItem.command.command = 'extension.vsKubernetes' + podOnSelect;
                    treeItem.command.title = podOnSelect;
                }
            } else {
                // This is a Kubernetes resource node
                if (manifestKinds.indexOf('All') != -1
                    || manifestKinds.indexOf(node.resourceKind.manifestKind) != -1) {
                    if (treeItem.command) {
                        // Clear the default command associated with tree node.
                        treeItem.command = null;
                    }
                }
            }
        }
        // returns nothing (but returns it quickly!)
    }
}

const KUBERNETES_NO_LOAD_ON_SELECT = new KubernetesNoLoadOnSelect();

export async function activate(context: vscode.ExtensionContext) {

    const explorer = await k8s.extension.clusterExplorer.v1;
    if (!explorer.available) {
        console.log("Unable to register node customizer: ");
        return;
    }

    explorer.api.registerNodeUICustomizer(KUBERNETES_NO_LOAD_ON_SELECT);
}

export function deactivate() {
}
