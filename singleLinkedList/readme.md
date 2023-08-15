# Singly Linked List:

-Linked List Data Structure Crash Course

Question 1:Construct Singly Linked List - Design a Singly linked list class that has a head and tail. Every node is to have two attributes: value:  the value of the current node, and next: a pointer to the next node. The linked list is to be 0-indexed. The class should support the following:

SinglyLinkedList() Initializes the SinglyLinkedList object.

get(index) Get the value of the indexth node. If the index is invalid, return -1.

addAtHead(value)- Add a node of given value before the first element of the linked list.

addAtTail(value) -  Add a node of given value at the last element of the linked list.

addAtIndex(index, value) Add a node of given value before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, don’t insert the node.

deleteAtIndex(index) Delete the indexth node in the linked list, if the index is valid, else nothing happens.

Question 2:delete duplicates - You are given the head of a Sorted Singly Linked list. Write a function that will take the given head as input, delete all nodes that have a value that is already the value of another node so that each value appears 1 time only and return the linked list, which is still to be a sorted linked list.

